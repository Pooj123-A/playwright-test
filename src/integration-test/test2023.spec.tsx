
import { test, expect } from "@playwright/experimental-ct-react";
import App2023 from "../example/App2023.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2023 />);
  await expect(component).toContainText("Learn React");
});
