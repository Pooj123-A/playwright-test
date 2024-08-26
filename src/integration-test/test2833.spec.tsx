
import { test, expect } from "@playwright/experimental-ct-react";
import App2833 from "../example/App2833.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2833 />);
  await expect(component).toContainText("Learn React");
});
