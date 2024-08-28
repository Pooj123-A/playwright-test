
import { test, expect } from "@playwright/experimental-ct-react";
import App1048 from "./App1048.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1048 />);
  await expect(component).toContainText("Learn React");
});
