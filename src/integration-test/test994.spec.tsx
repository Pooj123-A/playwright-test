
import { test, expect } from "@playwright/experimental-ct-react";
import App994 from "../example/App994.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App994 />);
  await expect(component).toContainText("Learn React");
});
