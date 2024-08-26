
import { test, expect } from "@playwright/experimental-ct-react";
import App935 from "../example/App935.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App935 />);
  await expect(component).toContainText("Learn React");
});
