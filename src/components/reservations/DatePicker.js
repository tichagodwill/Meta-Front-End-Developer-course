import { useField } from "formik";
import {
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
} from "@chakra-ui/react";
import Select from "./Select";
import {
  CalendarPanel,
  Month_Names_Short,
  Weekday_Names_Short,
} from "chakra-dayzed-datepicker";
import { subDays } from "date-fns";

function DatePicker({ config, ...props }) {
  // eslint-disable-next-line
  const [field, meta, helpers] = useField(props);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOnClose = () => {
    helpers.setTouched(true);
    onClose();
  };

  const handleOnDateSelected = (data) => {
    helpers.setValue(data.date);
    onClose();
  };

  return (
    <>
      <Select
        {...props}
        config={{
          icon: config.icon,
          onClick: onOpen,
          selected: field.value !== null,
        }}
      >
        {field.value !== null
          ? field.value.toLocaleDateString()
          : props.children}
      </Select>
      <Modal isOpen={isOpen} onClose={handleOnClose} size={"xs"} isCentered>
        <ModalOverlay>
          <ModalContent>
            <CalendarPanel
              dayzedHookProps={{
                showOutsideDays: true,
                onDateSelected: handleOnDateSelected,
                selected: field.value,
                minDate: subDays(new Date(), 1),
              }}
              configs={{
                dateFormat: "yyyy-MM-dd",
                monthNames: Month_Names_Short,
                dayNames: Weekday_Names_Short,
                firstDayOfWeek: 0,
              }}
              propsConfigs={{
                dayOfMonthBtnProps: {
                  defaultBtnProps: {
                    _hover: {
                      background: "primaryYellow.100",
                    },
                  },
                  selectedBtnProps: {
                    background: "primaryGreen.100",
                    color: "highlight.100",
                  },
                },
              }}
            />
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
}

export default DatePicker;
