
import { test, expect } from "@playwright/experimental-ct-react";
import App735 from "./App735.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App735 />);
  await expect(component).toContainText("Learn React");
});
