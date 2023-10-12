import { Box, Button, useDisclosure, FocusLock } from "@chakra-ui/react";
import Select from "./Select";
import { useField } from "formik";
import { useEffect, useState } from "react";

function BackgroundLock(props) {
  function handleClick() {
    props.onClose();
  }
  return (
    <Box
      width="100vw"
      height="100dvh"
      top="0px"
      left="0px"
      position="fixed"
      overflow="auto"
      zIndex={3}
      backgroundColor="rgba(0,0,0,0.48)"
      onClick={handleClick}
    />
  );
}

function ListItem(props) {
  function handleClick() {
    props.handleClick(props.value);
  }
  return (
    <Button
      role="option"
      variant="primaryGreen"
      width={
        props.double
          ? { base: "150px", sm: "200px" }
          : { base: "300px", sm: "400px" }
      }
      height={{ base: "40px", sm: "80px" }}
      borderRadius={0}
      borderStyle={
        props.double
          ? (props.idx & 1) === 0
            ? "none dotted dotted none"
            : "none none dotted none"
          : "none none dotted none"
      }
      borderWidth={1}
      borderColor="highlight.900"
      onClick={handleClick}
    >
      {props.children}
    </Button>
  );
}

function List(props) {
  function handleClick(val) {
    props.onSelect(val);
  }
  const items =
    props.double && (props.data.length & 1) === 1
      ? [...props.data, ""]
      : props.data;
  return (
    <FocusLock>
      <Box
        position="absolute"
        zIndex={4}
        marginTop={"8px"}
        boxShadow={"4px 4px 4px 0px rgba(0,0,0,0.25)"}
      >
        {items.map((text, idx) => (
          <ListItem
            key={idx}
            double={props.double}
            idx={idx}
            value={text}
            handleClick={handleClick}
          >
            {text}
          </ListItem>
        ))}
      </Box>
    </FocusLock>
  );
}

function ListBox({ config, ...props }) {
  // eslint-disable-next-line
  const [field, meta, helpers] = useField(props);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSelected, setSelected] = useState(false);

  const handleOnClose = () => {
    helpers.setTouched(true);
    onClose();
  };

  const onSelect = (val) => {
    if (val.length === 0) {
      helpers.setTouched(true);
    } else {
      helpers.setValue(val);
      setSelected(true);
    }
    onClose();
  };

  useEffect(() => {
    const valid = config.values.includes(field.value);
    if (isSelected) {
      if (!valid) {
        helpers.setValue("");
      }
    }
    setSelected(valid);
    // eslint-disable-next-line
  }, [config.values]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isOpen) {
        if (e.key === "Escape") {
          e.stopPropagation();
          handleOnClose();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <>
      <Select
        {...props}
        config={{ icon: config.icon, onClick: onOpen, selected: isSelected }}
      >
        {isSelected ? field.value : props.children}
      </Select>
      {isOpen && <BackgroundLock onClose={handleOnClose} />}
      {isOpen && (
        <List data={config.values} double={config.double} onSelect={onSelect} />
      )}
    </>
  );
}

export default ListBox;
