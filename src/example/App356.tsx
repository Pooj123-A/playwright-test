
import { test, expect } from "@playwright/experimental-ct-react";
import App356 from "./App356.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App356 />);
  await expect(component).toContainText("Learn React");
});
