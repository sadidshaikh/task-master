import { Draggable } from "react-beautiful-dnd";
import { Typography, Box } from "@mui/material";
import UserName from "../../../common/UserName";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import colors from "../../../theme/variables";

const TaskCard = ({ item, handleClickOnTask }) => {
  return (
    <Draggable key={item?._id} draggableId={item?._id} index={item?.index}>
      {(provided) => (
        <Box
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          sx={{
            border: `1px solid ${colors.lightGrey}`,
            width: "100%",
            padding: 2,
            backgroundColor: "rgba(255, 255, 255, 0.64)",
            borderRadius: "0.4rem",
            marginBottom: "1rem",
            cursor: "pointer",
          }}
          onClick={() => handleClickOnTask(item)}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "fles-start",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <Typography>{item?.task}</Typography>
            {item?.label && (
              <Typography
                sx={{
                  backgroundColor: item?.labelColor,
                  width: "fit-content",
                  padding: ".2rem .6rem",
                  borderRadius: "1rem",
                  color: "white",
                  mt: 2,
                  ml: -1,
                  fontSize: ".8rem",
                }}
              >
                {item?.label}
              </Typography>
            )}
          </Box>
          <Box
            sx={{
              mt: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <UserName formTaskComponent={true} />
            {item?.subTasks?.length > 0 && (
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FormatListBulletedIcon
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                    fontSize: ".9rem",
                  }}
                />
                <Typography sx={{ fontSize: ".9rem" }}>
                  {item?.subTasks?.length}
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      )}
    </Draggable>
  );
};

export default TaskCard;
