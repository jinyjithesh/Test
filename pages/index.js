import React, { useState } from "react";
import {
  Field,
  Input,
  InputGroup,
  Label,
  
  Radio,
} from "@zendeskgarden/react-forms";
import { Button } from "@zendeskgarden/react-buttons";
import { Dropdown, Trigger, Menu, Item } from "@zendeskgarden/react-dropdowns";
import { IoIosArrowDown } from "react-icons/Io";
import { Datepicker } from '@zendeskgarden/react-datepickers';

import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

  
  const [selectedItem, setSelectedItem] = useState("PAN");
  const [isOpen, setIsOpen] = useState(false);  
  const [radioValue, setRadioValue] = useState("PAN"); 
  const [state, setState] = useState(new Date());
 
  return (
    <div className={styles.container} >
      <Head>
        <title>Cydez Technologies
</title>
      
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Admin Utility
        </h1>
        <h2>  SEARCH ClIENT DETAILS </h2>
        
<div>
<form className="w-full  max-w-lg ">
<div className="text-xs">Do you already have a will & more customer id?</div>
<div className="inline-flex ">

<Field>
  <Radio
  name="default example"
          value="yes"
          checked={radioValue === "yes"}
          onChange={(event) => setRadioValue(event.target.value)}
        >
          <Label>Yes</Label>
  </Radio>
  </Field>

  <Field>

  <Radio
          name="default example"
          value="No"
          checked={radioValue === "No"}
          onChange={(event) => setRadioValue(event.target.value)}
        >
          <Label>No</Label>
        </Radio>
</Field>

</div>
<h3>Details of deceased</h3>
<div className=""> 
  <Field>
  <label>Client id(it in possession)</label>
        <Input />
  </Field>
</div>

  <div >
    
    <Field>
    <Label>Firstname</Label>
        <Input/>
        <Label>Middlename</Label>
        <Input/>
        <Label>Surname</Label>
        <Input/>
     </Field>   
    </div>

    <div >
    <Field>
          <Label>Select a date</Label>
            <Input placeholder="00/00/0000"  />
       
     </Field>
<Field>
  
<Dropdown
        isOpen={isOpen}
        selectedItem={selectedItem}
        onSelect={(item) => setSelectedItem(item)}
        onStateChange={(state) => {
          if (state.isOpen !== undefined) {
            setIsOpen(state.isOpen);
          }
        }}
      >
        <Trigger>
          <InputGroup>
            <Button focusInset>
              {selectedItem}
              <Button.EndIcon isRotated={isOpen} IoIosArrowDown>
             
            <Input placeholder="0000 1234 5678"/>
               
              </Button.EndIcon>
            </Button>
          </InputGroup>
        </Trigger>

        <Menu>
          <Item value="AadhaarNO">Aadhaarno</Item>
          <Item value="Passport">Passport</Item>
          <Item value="PAN">PAN</Item>
        </Menu>
      </Dropdown>
</Field>
     
      </div>
      
    </form>
    <Button isPrimary size="small">Save & Next</Button>

        </div>
      </main>

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}
