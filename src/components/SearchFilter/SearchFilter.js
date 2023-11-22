import React from "react";
import Select from 'react-select';
import styles from "../SearchFilter/SearchFilter.module.scss";
import {Link} from "react-router-dom";

const suppliers = [
    { label: 'Property Type', value: 'Property Type' },
    { label: 'Available Cities', value: 'Available Cities' },
    { label: 'Bedrooms Nr.', value: 'Bedrooms Nr.' },
    { label: 'Bathrooms Nr.', value: 'Bathrooms Nr.'}
]

const Type = [
    { label: 'MULTIFAMILY', value: 'MULTIFAMILY' },
    { label: 'RESIDENTIAL', value: 'RESIDENTIAL' },
    { label: 'COMMERCIAL', value: 'COMMERCIAL' },
    { label: 'FOR RENT', value: 'FOR RENT'}
]

const Cities = [
    { label: 'Hialeah', value: 'Hialeah'},
    { label: 'Miami', value: 'Miami'}
]

const Bedrooms = [
    { label: '4', value: '4'},
    { label: '5', value: '5'},
    { label: '9', value: '9'}
]

const Bathrooms = [
    { label: '3', value: '3'},
    { label: '4', value: '4'},
    { label: '7', value: '7'}
]

const style = {
    control: base => ({
      ...base,
      border: 0,
      // This line disable the blue border
      boxShadow: "none"
    })
  };

export const SearchFilter = () => {
    return (
        <div className={styles.SearchFilter}>
            <div className={styles.SearchFilter__items}>
                <Select
                        className= {styles.SearchFilter__box}                   
                        isSearchable={false} 
                        defaultValue = { suppliers[0] }
                        options = { Type }
                        styles={style}
                        components={{
                            IndicatorSeparator: () => null
                        }}
                    />
                    <Select
                        className= {styles.SearchFilter__box}
                        isSearchable={false} 
                        defaultValue = { suppliers[1] }
                        options = { Cities }
                        styles={style}
                        components={{
                            IndicatorSeparator: () => null
                        }}
                    />
                    <Select
                        className= {styles.SearchFilter__box}
                        isSearchable={false} 
                        defaultValue = { suppliers[2] }
                        options = { Bedrooms }
                        styles={style}
                        components={{
                            IndicatorSeparator: () => null
                        }}
                    />
                    <Select
                        className= {styles.SearchFilter__box}
                        isSearchable={false} 
                        defaultValue = { suppliers[3] }
                        options = { Bathrooms }
                        styles={style}
                        components={{
                            IndicatorSeparator: () => null
                        }}
                    />
                    <Link to="/searchpage">
                        <button className={styles.SearchFilter__button}>Search</button>
                    </Link>
            </div>
        </div>
    )
}