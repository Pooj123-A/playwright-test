
import { test, expect } from "@playwright/experimental-ct-react";
import App2097 from "../example/App2097.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2097 />);
  await expect(component).toContainText("Learn React");
});
