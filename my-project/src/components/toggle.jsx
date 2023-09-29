import { useState, Fragment } from "react";
import { Switch } from "@headlessui/react";

function MyToggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className="boxShadowToggle"
      as={Fragment}
    >
      {({ checked }) => (
        /* Use the `checked` state to conditionally style the button. */
        <button
          className={`${
            checked ? "bg-lightBlue" : "bg-gray-200"
          } relative items-center inline-flex w-24 h-10 py-6 rounded-full`}
        >
          {/* Replace the dot with your custom image */}
          <img
            src="/assets/Group230.png"
            alt=""
            className={`${
              checked ? "translate-x-10" : "-translate-x-5"
            } flex items-center h-28 w-28 top-3 relative transform transition`}
          />
        </button>
      )}
    </Switch>
  );
}

export default MyToggle;
