
import { test, expect } from "@playwright/experimental-ct-react";
import App1936 from "../example/App1936.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1936 />);
  await expect(component).toContainText("Learn React");
});
