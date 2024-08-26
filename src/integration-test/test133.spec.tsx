
import { test, expect } from "@playwright/experimental-ct-react";
import App133 from "../example/App133.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App133 />);
  await expect(component).toContainText("Learn React");
});
