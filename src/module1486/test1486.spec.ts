
import { test, expect } from "@playwright/experimental-ct-react";
import App1486 from "./App1486.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1486 />);
  await expect(component).toContainText("Learn React");
});
