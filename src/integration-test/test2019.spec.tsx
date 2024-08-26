
import { test, expect } from "@playwright/experimental-ct-react";
import App2019 from "../example/App2019.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2019 />);
  await expect(component).toContainText("Learn React");
});
