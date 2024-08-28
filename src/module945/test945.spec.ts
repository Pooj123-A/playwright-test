
import { test, expect } from "@playwright/experimental-ct-react";
import App945 from "./App945.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App945 />);
  await expect(component).toContainText("Learn React");
});
