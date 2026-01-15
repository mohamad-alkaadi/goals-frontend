import { getTokenCookieClient } from "@/utils/tokenUtilsClient";
import { Dispatch, SetStateAction } from "react";

export interface FriendsType {
  _id: string;
  name: string;
  email: string;
}

export interface FriendsApiResponse {
  friends: FriendsType[];
  received: FriendsType[];
  sent: FriendsType[];
}
// export interface FriendsType {
//   friends:{
//     _id: string;
//     name: string;
//   };
//   received:{
//     _id: string;
//     name: string;
//   };
//   sent:{
//     _id: string;
//     name: string;
//   };

// }

export interface FriendRequestsType {
  friendRequests: {
    _id: string;
    from: {
      _id: string;
      name: string;
    };
    to: {
      _id: string;
      name: string;
    };
  };
}
export interface RequestsType {
  friendRequests: FriendRequestsType[] | null;
  pendingRequests: FriendRequestsType[] | null;
}
export interface SentRequestsType {
  _id: string;
  from: {
    _id: string;
    name: string;
  };
  to: {
    _id: string;
    name: string;
  };
}

export interface SearchResult {
  resSuccess: boolean;
  message: string;
}

const getAllFriends = async (): Promise<FriendsApiResponse> => {
  const token = await getTokenCookieClient();
  const url =
    process.env.NEXT_PUBLIC_ENV === "DEV"
      ? process.env.NEXT_PUBLIC_DEV_URL
      : process.env.NEXT_PUBLIC_PROD_URL;

  const response = await fetch(`${url}/api/v1/friends/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  });
  const data = await response.json();
  // Assuming the API returns { data: { friends, received, sent } }
  return data.data as FriendsApiResponse;
};

const deleteFriend = async (id: string) => {
  const token = await getTokenCookieClient();
  const url =
    process.env.NEXT_PUBLIC_ENV === "DEV"
      ? process.env.NEXT_PUBLIC_DEV_URL
      : process.env.NEXT_PUBLIC_PROD_URL;

  await fetch(`${url}/api/v1/friends/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify({
      friendId: id,
    }),
  });
};
const acceptFriend = async (id: string) => {
  const token = await getTokenCookieClient();
  const url =
    process.env.NEXT_PUBLIC_ENV === "DEV"
      ? process.env.NEXT_PUBLIC_DEV_URL
      : process.env.NEXT_PUBLIC_PROD_URL;
  await fetch(`${url}/api/v1/friends/requests/recipient/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify({
      from: id,
    }),
  });
};

const rejectFriend = async (id: string) => {
  const token = await getTokenCookieClient();
  const url =
    process.env.NEXT_PUBLIC_ENV === "DEV"
      ? process.env.NEXT_PUBLIC_DEV_URL
      : process.env.NEXT_PUBLIC_PROD_URL;
  await fetch(`${url}/api/v1/friends/requests/recipient/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify({
      from: id,
    }),
  });
};

const cancelFriendRequest = async (id: string) => {
  const token = await getTokenCookieClient();
  const url =
    process.env.NEXT_PUBLIC_ENV === "DEV"
      ? process.env.NEXT_PUBLIC_DEV_URL
      : process.env.NEXT_PUBLIC_PROD_URL;
  await fetch(`${url}/api/v1/friends/requests/sender/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify({
      from: id,
    }),
  });
};

const addFriend = async (
  email: string,
  setSearchResult: Dispatch<SetStateAction<SearchResult>>,
  setEmail: Dispatch<SetStateAction<string>>
) => {
  const token = await getTokenCookieClient();
  const url =
    process.env.NEXT_PUBLIC_ENV === "DEV"
      ? process.env.NEXT_PUBLIC_DEV_URL
      : process.env.NEXT_PUBLIC_PROD_URL;

  const result = await fetch(`${url}/api/v1/friends/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify({
      email: email,
    }),
  })
    .then((res) => res.json())
    .catch((err) => err.json());

  if (result.status == "success") {
    setSearchResult({ resSuccess: true, message: result.message });
    setEmail("");
  }
  if (result.status == "fail")
    setSearchResult({ resSuccess: false, message: result.message });
};

export {
  getAllFriends,
  deleteFriend,
  addFriend,
  acceptFriend,
  rejectFriend,
  cancelFriendRequest,
};
