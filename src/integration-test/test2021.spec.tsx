
import { test, expect } from "@playwright/experimental-ct-react";
import App2021 from "../example/App2021.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2021 />);
  await expect(component).toContainText("Learn React");
});
