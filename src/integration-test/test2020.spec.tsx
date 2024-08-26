
import { test, expect } from "@playwright/experimental-ct-react";
import App2020 from "../example/App2020.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2020 />);
  await expect(component).toContainText("Learn React");
});