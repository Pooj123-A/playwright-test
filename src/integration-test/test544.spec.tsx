
import { test, expect } from "@playwright/experimental-ct-react";
import App544 from "../example/App544.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App544 />);
  await expect(component).toContainText("Learn React");
});
