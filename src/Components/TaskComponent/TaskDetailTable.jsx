import React from "react";
import { SimpleGrid, Stack, Flex, chakra } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import GroupButton from "./ButtonGroup/GroupButton";

const data = [
  {
    name: "Daggy",
    created: "7 days ago",
  },
  {
    name: "Anubra",
    created: "23 hours ago",
  },
  {
    name: "Josef",
    created: "A few seconds ago",
  },
  {
    name: "Sage",
    created: "A few hours ago",
  },
];

function TaskDetailTable(props) {
  const bg = useColorModeValue("white", "gray.800");
  const bg2 = useColorModeValue("white", "gray.800");
  const bg3 = useColorModeValue("gray.100", "gray.700");

  return (
    <Flex
      w="full"
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={50}
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        direction={{
          base: "column",
        }}
        w="full"
        bg={{
          md: bg,
        }}
        shadow="lg"
      >
        {data.map((token, tid) => {
          return (
            <Flex
              direction={{
                base: "row",
                md: "column",
              }}
              bg={bg2}
              key={tid}
            >
              <SimpleGrid
                spacingY={3}
                columns={{
                  base: 1,
                  md: 4,
                }}
                w={{
                  base: 120,
                  md: "full",
                }}
                textTransform="uppercase"
                bg={bg3}
                color={"gray.500"}
                py={{
                  base: 1,
                  md: 4,
                }}
                px={{
                  base: 2,
                  md: 10,
                }}
                fontSize="md"
                fontWeight="hairline"
              >
                <span>Name</span>
                <span>Created</span>
                <span>Data</span>
                <chakra.span
                  textAlign={{
                    md: "right",
                  }}
                >
                  Actions
                </chakra.span>
              </SimpleGrid>
              <SimpleGrid
                spacingY={3}
                columns={{
                  base: 1,
                  md: 4,
                }}
                w="full"
                py={2}
                px={10}
                fontWeight="hairline"
              >
                <span>{token.name}</span>
                <chakra.span
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                >
                  {token.created}
                </chakra.span>
                <GroupButton />
              </SimpleGrid>
            </Flex>
          );
        })}
      </Stack>
    </Flex>
  );
}

export default TaskDetailTable;
