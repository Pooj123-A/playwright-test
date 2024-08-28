
import { test, expect } from "@playwright/experimental-ct-react";
import App1716 from "./App1716.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1716 />);
  await expect(component).toContainText("Learn React");
});
