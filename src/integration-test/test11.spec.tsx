
import { test, expect } from "@playwright/experimental-ct-react";
import App11 from "../example/App11.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App11 />);
  await expect(component).toContainText("Learn React");
});
