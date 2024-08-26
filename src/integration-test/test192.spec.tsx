
import { test, expect } from "@playwright/experimental-ct-react";
import App192 from "../example/App192.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App192 />);
  await expect(component).toContainText("Learn React");
});
