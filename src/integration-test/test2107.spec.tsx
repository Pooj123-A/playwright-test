
import { test, expect } from "@playwright/experimental-ct-react";
import App2107 from "../example/App2107.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2107 />);
  await expect(component).toContainText("Learn React");
});
