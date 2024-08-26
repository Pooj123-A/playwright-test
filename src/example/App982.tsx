
import { test, expect } from "@playwright/experimental-ct-react";
import App982 from "./App982.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App982 />);
  await expect(component).toContainText("Learn React");
});
