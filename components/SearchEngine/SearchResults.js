import {useState, useEffect} from "react";
import PropertyCard from "./PropertyCard";
import ChangeSite from "./ChangeSite";
import Applychanges from "./Applychanges";


export default function SearchResults({
  properties,
  actualSite,
  setActualSite,
  choosedCountry,
  propDetails, 
  setPropDetails,
  showProp,
  setShowProp,
  searchConditions,
  setSearchConditions,
  sitesArray,
  setSitesArray,
  sitesArraycounter
}) {
      // // countring how many sites is nessesairly
      const howManySites = Math.ceil(properties.length/2)

  return (
    <div className="h-2/3 w-12/12 md:w-8/12">
      {properties.map(property => 
          <PropertyCard
            country={property.country}
            region={property.region}
            city={property.city}
            title={property.title}
            market={property.market}
            type={property.type}
            beds={property.bedrooms}
            baths={property.bathrooms}
            pool={property.pool}
            garage={property.garage}
            garden={property.garden}
            solarium={property.solatium}
            seaview={property.seaview}
            balcony={property.garden}
            price={property.price}
            distance={property.distance}
            desc={property.description}
            images={property.image}
            property={property}
            properties={properties}
            choosedCountry={choosedCountry}
            actualSite={actualSite}
            propDetails={propDetails}
            setPropDetails={setPropDetails}
            showProp={showProp}
            setShowProp={setShowProp}
        />
      )}
          <ChangeSite
            sitesArray={sitesArray}
            setSitesArray={setSitesArray}
            actualSite={actualSite}
            setActualSite={setActualSite}
            searchConditions={searchConditions}
            setSearchConditions={setSearchConditions}
            sitesArraycounter={sitesArraycounter}
          />
    </div>
  )

}