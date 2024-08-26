
import { test, expect } from "@playwright/experimental-ct-react";
import App791 from "../example/App791.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App791 />);
  await expect(component).toContainText("Learn React");
});
