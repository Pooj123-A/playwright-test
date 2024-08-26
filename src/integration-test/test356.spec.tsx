
import { test, expect } from "@playwright/experimental-ct-react";
import App356 from "../example/App356.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App356 />);
  await expect(component).toContainText("Learn React");
});
