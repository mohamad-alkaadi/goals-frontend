import { addFriend } from "@/api/friends";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoAdd } from "react-icons/io5";

const AddFriendBox = () => {
  const [submitActive, setSubmitActive] = useState(false);
  const [email, setEmail] = useState("");
  const [searchResult, setSearchResult] = useState("");
  return (
    <div className="flex flex-col justify-center items-start">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (email === "") return;
          setSubmitActive(true);
          addFriend(email, setSearchResult);
          setEmail("");
        }}
        className="flex justify-center items-center w-full border-[1px] border-[#9b9b9b] space-x-1"
      >
        <label htmlFor="add-friend" className="py-2 px-2">
          <IoIosSearch />
        </label>
        <input
          type="email"
          id="add-friend"
          name="add-friend"
          className="flex-grow outline-0 py-2"
          placeholder="Add Friend"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className={`cursor-pointer hover:bg-[#373737] h-full py-2 px-2 ${
            submitActive && "cursor-wait"
          }`}
        >
          <IoAdd />
        </button>
      </form>
      <div className="pl-1">{searchResult}</div>
    </div>
  );
};

export default AddFriendBox;
