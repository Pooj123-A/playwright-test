
import { test, expect } from "@playwright/experimental-ct-react";
import App2431 from "../example/App2431.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2431 />);
  await expect(component).toContainText("Learn React");
});
