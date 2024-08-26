
import { test, expect } from "@playwright/experimental-ct-react";
import App579 from "../example/App579.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App579 />);
  await expect(component).toContainText("Learn React");
});
