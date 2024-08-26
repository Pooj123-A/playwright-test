
import { test, expect } from "@playwright/experimental-ct-react";
import App317 from "../example/App317.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App317 />);
  await expect(component).toContainText("Learn React");
});
