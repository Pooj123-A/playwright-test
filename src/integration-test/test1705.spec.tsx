
import { test, expect } from "@playwright/experimental-ct-react";
import App1705 from "../example/App1705.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1705 />);
  await expect(component).toContainText("Learn React");
});
