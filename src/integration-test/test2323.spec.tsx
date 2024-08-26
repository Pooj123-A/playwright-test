
import { test, expect } from "@playwright/experimental-ct-react";
import App2323 from "../example/App2323.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2323 />);
  await expect(component).toContainText("Learn React");
});
