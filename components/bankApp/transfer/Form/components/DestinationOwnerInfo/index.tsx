import { Dispatch, FC, SetStateAction } from 'react';

type DestinationOwnerInfoProps = {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  lastname: string;
  setLastname: Dispatch<SetStateAction<string>>;
};

export const DestinationOwnerInfo: FC<DestinationOwnerInfoProps> = ({ name, setName, lastname, setLastname }) => (
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 mb-6 w-full group">
      <input
        name="firstName"
        id="firstName"
        data-testid="firstName"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="block py-2.5 px-0 w-full text-base md:text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:border-lime-500 focus:outline-none focus:ring-0 peer"
        placeholder=" "
      />
      <label
        htmlFor="firstName"
        className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        Owner Name
      </label>
    </div>

    <div className="relative z-0 mb-6 w-full group">
      <input
        name="lastName"
        id="lastName"
        data-testid="lastName"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
        className="block py-2.5 px-0 w-full text-base md:text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:border-lime-500 focus:outline-none focus:ring-0  peer"
        placeholder=" "
      />
      <label
        htmlFor="lastName"
        className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        Owner last name
      </label>
    </div>
  </div>
);
