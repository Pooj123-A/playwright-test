
import { test, expect } from "@playwright/experimental-ct-react";
import App407 from "../example/App407.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App407 />);
  await expect(component).toContainText("Learn React");
});
