
import { test, expect } from "@playwright/experimental-ct-react";
import App1708 from "./App1708.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1708 />);
  await expect(component).toContainText("Learn React");
});
