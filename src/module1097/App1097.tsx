
import { test, expect } from "@playwright/experimental-ct-react";
import App1097 from "./App1097.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1097 />);
  await expect(component).toContainText("Learn React");
});
