
import { test, expect } from "@playwright/experimental-ct-react";
import App1224 from "../example/App1224.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1224 />);
  await expect(component).toContainText("Learn React");
});
