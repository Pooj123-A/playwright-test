
import { test, expect } from "@playwright/experimental-ct-react";
import App448 from "../example/App448.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App448 />);
  await expect(component).toContainText("Learn React");
});
