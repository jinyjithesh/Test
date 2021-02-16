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

import { Datepicker } from '@zendeskgarden/react-datepickers';
export default function  AdminUtility ()  {
  const [radioValue, setRadioValue] = useState("Home");
  const [selectedItem, setSelectedItem] = useState("Title");
  const [isOpen, setIsOpen] = useState(false);  const [state, setState] = useState(new Date());
  return (
 <form>
      <div className="text-center text-black">Admin Utility
        <div className="text-sm ">       SEARCH ClIENT DETAILS</div>
        <div className="text-xs">Do you already have a will & more customer id?</div>
      </div> <Field>
        <Radio
          name="default example"
          value="yes"
          checked={radioValue === "yes"}
          onChange={(event) => setRadioValue(event.target.value)}
        >
          <Label>Yes</Label>
        </Radio>

        <Radio
          name="default example"
          value="No"
          checked={radioValue === "No"}
          onChange={(event) => setRadioValue(event.target.value)}
        >
          <Label>No</Label>
        </Radio>
      </Field>

      <Field>
        <Label>Client id(it in possession)</Label>
        <Input/>
       </Field>
       <Field>
        <Label>Firstname</Label>
        <Input/>
        <Label>Middlename</Label>
        <Input/>
        <Label>Surname</Label>
        <Input/>
       </Field>
      <Field>
          <Label>Select a date</Label>
          <Datepicker value={state} onChange={setState}>
            <Input />
          </Datepicker>
      <Label>Name</Label>

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
              <Button.EndIcon isRotated={isOpen}>
             
                <Input placeholder="0000 1234 5678"/>
              </Button.EndIcon>
            </Button>
           
          </InputGroup>
        </Trigger>

        <Menu>
          <Item value="Mr">Aadhaarno</Item>
          <Item value="Mrs">Passport</Item>
          <Item value="Miss">PAN</Item>
        </Menu>
      </Dropdown>

      
     
      <Field>
        <Button isPrimary size="small">
          Save & Next
        </Button>
      
      </Field>
</Field>
</form>
  );};