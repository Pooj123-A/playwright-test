
import { test, expect } from "@playwright/experimental-ct-react";
import App242 from "../example/App242.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App242 />);
  await expect(component).toContainText("Learn React");
});
