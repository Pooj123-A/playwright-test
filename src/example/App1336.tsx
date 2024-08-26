
import { test, expect } from "@playwright/experimental-ct-react";
import App1336 from "./App1336.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1336 />);
  await expect(component).toContainText("Learn React");
});
