
import { test, expect } from "@playwright/experimental-ct-react";
import App438 from "../example/App438.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App438 />);
  await expect(component).toContainText("Learn React");
});
