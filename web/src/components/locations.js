import React from 'react';
import { LocationMarkerIcon } from '@heroicons/react/solid';

export default function Locations({ locations }) {
  locations = locations.map(({ location }) => location);

  let sortedLocations = locations.sort(function (locationA, locationB) {
    return locationA.city.localeCompare(locationB.city);
  });
  return (
    <>
      <h2 className="text-5xl font-extrabold mb-1">Proudly Serving</h2>
      <h4 className="border-highlight text-xl mb-14 border-b-2 inline-block mx-auto capitalize">
        Residents in the areas surrounding
      </h4>
      <ul className="columns-2 text-left text-lg tablet:columns-3 laptop:columns-2">
        {sortedLocations.map((location, index) => (
          <li className="mb-3 xlaptop:ml-8" key={index} title={location.city}>
            <LocationMarkerIcon className="inline-block h-5 w-6 mr-1 text-[18px]" />
            {location.city}
          </li>
        ))}
      </ul>
    </>
  );
}
