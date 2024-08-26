
import { test, expect } from "@playwright/experimental-ct-react";
import App1171 from "../example/App1171.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1171 />);
  await expect(component).toContainText("Learn React");
});
