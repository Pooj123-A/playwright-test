
import { test, expect } from "@playwright/experimental-ct-react";
import App2620 from "../example/App2620.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2620 />);
  await expect(component).toContainText("Learn React");
});
