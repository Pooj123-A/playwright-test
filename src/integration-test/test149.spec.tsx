
import { test, expect } from "@playwright/experimental-ct-react";
import App149 from "../example/App149.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App149 />);
  await expect(component).toContainText("Learn React");
});
