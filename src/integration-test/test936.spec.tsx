
import { test, expect } from "@playwright/experimental-ct-react";
import App936 from "../example/App936.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App936 />);
  await expect(component).toContainText("Learn React");
});
