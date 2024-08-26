
import { test, expect } from "@playwright/experimental-ct-react";
import App518 from "../example/App518.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App518 />);
  await expect(component).toContainText("Learn React");
});
